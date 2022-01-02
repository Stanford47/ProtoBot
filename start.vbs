Option Explicit

Dim PBWSFO, PBShell

Set PBWSFO = CreateObject("Scripting.FileSystemObject")
Set PBShell = CreateObject("WScript.Shell")

Dim path
path = PBWSFO.GetAbsolutePathName("src")
path = path & "\"

PBShell.Run("cmd.exe /K node " & path & "main.js")