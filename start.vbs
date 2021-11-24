Option Explicit
On Error Resume Next

'Use this to start bot
Dim FTO, PATH, PBOBJSH
'change path var according to file structure

PATH = "C:\Users\Owner\Documents\GitHub\ProtoBot\src\" 'Change Owner\Documents\GitHub to whatever is in bewteen the user and the ProtoBot folder

Set PBOBJSH = CreateObject("WScript.Shell")

FTO = InputBox("Which file would you like to open", "ProtoBot Opener", "all")

FTO

If FTO = "main" Then
    PBOBJSH.Run("node " & PATH & "thing.js")
Else If FTO = "moderation" Then 
    PBOBJSH.Run("node " & PATH & "modguystuffnthings.js")
Else If FTO = "guilds" Then
    PBOBJSH.Run("node " & PATH & "guilds.js")
Else If FTO = "other" Then
    PBOBJSH.Run("node " & PATH & "otherstuff.js")
Else If FTO = "vc" Then
    PBOBJSH.Run("node " & PATH & "voice.js")
Else If FTO = "all" Then
    PATH = "C:\Users\Owner\Documents\GitHub\ProtoBot\" 'read line 8
    PBOBJSH.Run("node " & PATH & "index.js")
End If End If End If End If End If End If