@echo off
REM ==================================================
REM Script PRO Ultra-Limpio: Actualización DWEC-25_26
REM Resumen de cambios legible por carpeta principal
REM ==================================================

REM --------- Configuración de rutas ---------
SET ORIGEN=C:\Users\Usuario\Desktop\DWEC-25_26_origen
SET DESTINO=C:\Users\Usuario\Desktop\CristinaSimon\Cliente\DWEC-25_26
SET REPO=C:\Users\Usuario\Desktop\CristinaSimon
SET LOGFILE=%REPO%\DWEC_update_log.txt

REM Carpetas principales
SET CARPETAS=Cliente Servidor Diseño Node

REM --------- Crear carpeta de destino y subcarpetas si no existen ---------
IF NOT EXIST "%DESTINO%" mkdir "%DESTINO%"

FOR %%C IN (%CARPETAS%) DO (
    IF NOT EXIST "%DESTINO%\%%C" mkdir "%DESTINO%\%%C"
)

REM --------- Copiar archivos excluyendo .git y sincronizar ---------
echo [%DATE% %TIME%] Copiando archivos desde %ORIGEN% a %DESTINO%... >> "%LOGFILE%"
robocopy "%ORIGEN%" "%DESTINO%" /MIR /XD .git /NFL /NDL /NJH /NJS /nc /ns /np >> "%LOGFILE%"

REM --------- Ir al repo principal ---------
cd /d "%REPO%"

REM --------- Añadir cambios al índice ---------
git add Cliente/DWEC-25_26

REM --------- Comprobar si hay cambios para commit ---------
git diff --cached --quiet
IF %ERRORLEVEL% EQU 0 (
    echo [%DATE% %TIME%] No hay cambios nuevos para commitear. >> "%LOGFILE%"
    goto FIN
)

REM --------- Obtener fecha y hora ---------
FOR /F "tokens=2-4 delims=/ " %%i IN ('date /t') DO SET FECHA=%%k-%%j-%%i
FOR /F "tokens=1-2 delims=: " %%i IN ('time /t') DO SET HORA=%%i%%j

REM --------- Generar commit legible ---------
git diff --cached --name-status > temp_diff.txt
SET COMMIT_MSG=Actualización DWEC-25_26: %FECHA% %HORA%`n

FOR %%C IN (%CARPETAS%) DO (
    SET LINEA=
    FOR /F "usebackq tokens=1,2*" %%A IN ("temp_diff.txt") DO (
        SET FILEPATH=%%C
        REM Verificar si el archivo pertenece a la carpeta
        echo %%C | findstr /b /i "%%C" >nul
        IF NOT ERRORLEVEL 1 (
            REM Traducir código A/M/D a texto legible
            SET TIPO=%%A
            SET NOMBRE=%%C
            IF "%%A"=="A" SET ACCION=añadido
            IF "%%A"=="M" SET ACCION=modificado
            IF "%%A"=="D" SET ACCION=eliminado
            CALL SET LINEA=!LINEA! !ACCION! %%C,
        )
    )
    IF NOT "!LINEA!"=="" (
        SET COMMIT_MSG=!COMMIT_MSG!%%C: !LINEA!`n
    )
)

DEL temp_diff.txt

REM --------- Hacer commit y push ---------
git commit -m "%COMMIT_MSG%"
git push

echo [%DATE% %TIME%] Actualización completada con commit "%COMMIT_MSG%" >> "%LOGFILE%"

:FIN
echo ==========================================
echo Copia de seguridad DWEC-25_26 completada.
echo ==========================================
pause
