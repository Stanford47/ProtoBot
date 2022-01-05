Option Explicit
On Error Resume Next

Dim PBWSFO, PBShell, IB, QUER

IB = InputBox("normal start or test?")

Set PBWSFO = CreateObject("Scripting.FileSystemObject")
Set PBShell = CreateObject("WScript.Shell")

IB

If IB = "normal" Then
    QUER = "shards.js"
Else If IB = "test" Then
    QUER = "main.js"
Else
    MsgBox "Your input is incorrect. Exiting execution..."
    WScript.Quit()
End If End If

Dim path
path = PBWSFO.GetAbsolutePathName("src")
path = path & "\"

PBShell.Run("cmd.exe /K node " & path & QUER)