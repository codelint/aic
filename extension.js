// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';

const vscode = require('vscode');
const axios = require('axios');
// import axios from 'axios';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const command = 'codelint.aic.updateDescription'
	// const command = 'codelint.updateDescription'
	let disposable = vscode.commands.registerCommand(command, async () => {

        // const terminal = vscode.window.createTerminal('Codelint');
        // terminal.show()
        // terminal.sendText("hello world")
        
        vscode.window.showInformationMessage(`disposable: ${command}`); 
        return true
    });

    context.subscriptions.push(disposable);

    // 监听编辑器活动状态的变化
    vscode.workspace.onDidChangeTextDocument(event => {

        try{
            if (event) {
            
                const document = event.document;
                const aiDescriptionRegex = /\/\*\s*ai\s+description\s*\*\//;
    
                // 检查当前文件是否为 PHP 文件
                if (document.languageId === 'php') {
                    const editor = vscode.window.activeTextEditor;
                    if(editor && editor.document === document){
                        const text = document.getText()
                        if (!aiDescriptionRegex.test(text)) {
                            return;
                        }else{
                            console.log('[codelint] ai description found.')
                        }
    
                        let match;
                        if ((match = aiDescriptionRegex.exec(text)) !== null) {
                            const startPos = document.positionAt(match.index);
                            const endPos = document.positionAt(match.index + match[0].length);
                            const range = new vscode.Range(startPos, endPos);
                            vscode.window.showInformationMessage('ai description found.');
                            editor.edit(editBuilder => {
                                editBuilder.replace(range, '/* bar */');
                            });
                        }
    
                    }else{
                        vscode.window.showInformationMessage('No editor');
                    }
                }
            }
        }catch(e){
            vscode.window.showErrorMessage(e.showErrorMessage);
        }
        
        
    });

	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "codelint" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with  registerCommand
	// // The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('codelint.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from codelint!');
	// });

	// context.subscriptions.push(disposable);
}

function activate2(context) {
	const command = 'codelint.updateDescription'
	let disposable = vscode.commands.registerCommand(command, async () => {
        // const terminal = vscode.window.createTerminal('Codelint Terminal');
        // terminal.show()
        // terminal.sendText('echo "Hello, this is output from the VSCode extension!"');
        vscode.window.showInformationMessage(`disposable: ${command}`);
        // console.log('disposable: ai-description-updater.updateDescription')
        
        const editor = vscode.window.activeTextEditor;
		
        if (!editor) {
			vscode.window.showInformationMessage('No editor');
            return; // No open text editor
        }

        const document = editor.document;
        const text = document.getText();

        // Check if the file contains the specific comment
        const aiDescriptionRegex = /\/\*\s*ai\s+description\s*\*\//;
        if (!aiDescriptionRegex.test(text)) {
            vscode.window.showInformationMessage('No /* ai description */ found.');
            return;
        }else{
			vscode.window.showInformationMessage('https://your-api-endpoint.com/api');
		}

        // Get the full content of the file
        const content = document.getText();

        try {
            // Call the HTTP API with the file content
			// vscode.window.showInformationMessage('https://your-api-endpoint.com/api');
            // const response = await axios.post('https://your-api-endpoint.com/api', {
            //     content: content
            // });

            // const result = response.data.result;
			const result = "hello world"

            // Replace the /* ai description */ with the result
            const updatedText = text.replace(aiDescriptionRegex, `/* ${result} */`);

            // Apply the edit to the document
            const edit = new vscode.WorkspaceEdit();
            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(text.length)
            );
            edit.replace(document.uri, fullRange, updatedText);
            await vscode.workspace.applyEdit(edit);

            vscode.window.showInformationMessage('AI Description updated successfully!');
        } catch (error) {
            vscode.window.showErrorMessage('Failed to update AI Description.');
            console.error(error);
        }
    });

    context.subscriptions.push(disposable);

	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "codelint" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with  registerCommand
	// // The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('codelint.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from codelint!');
	// });

	// context.subscriptions.push(disposable);
}



// This method is called when your extension is deactivated
function deactivate() {
    vscode.window.showInformationMessage('[codelint] deactivate'); 
}

module.exports = {
	activate,
	deactivate
}
