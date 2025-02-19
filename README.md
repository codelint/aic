# AIC - AI Coding Assistant

AIC (AI Coding Assistant) is a powerful Visual Studio Code extension designed to enhance your coding efficiency by leveraging modern AI interfaces. Whether you're writing code, debugging, or seeking suggestions, AIC provides intelligent assistance to streamline your development workflow.

## Features

- **AI-Powered Code Suggestions**: Get real-time code suggestions powered by advanced AI models.
- **Context-Aware Assistance**: AIC understands the context of your code and provides relevant recommendations.
- **Code Completion**: Enhance your productivity with AI-driven auto-completion for various programming languages.
- **Error Detection & Fixes**: Automatically detect potential errors in your code and suggest fixes.
- **Customizable AI Models**: Choose from multiple AI models or configure your own API key for personalized assistance.
- **Multi-Language Support**: Supports popular programming languages such as JavaScript, Python, PHP, Java, and more.

## Requirements

- **Visual Studio Code**: Version 1.60.0 or higher.
- **API Key** (Optional): If you want to use custom AI models, you'll need an API key from the AI service provider.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for **"AIC - AI Coding Assistant"** in the Extensions Marketplace.
4. Click **Install** to add the extension to your VSCode environment.

Alternatively, you can install the extension manually by downloading the `.vsix` file and using the following steps:

1. Download the `.vsix` file from the [GitHub repository](https://github.com/your-username/aic).
2. Open VSCode and press `Ctrl+Shift+P` to open the Command Palette.
3. Type `Extensions: Install from VSIX` and select the downloaded `.vsix` file.

## Usage

### Basic Usage

1. Open any code file in VSCode.
2. Start typing, and AIC will automatically provide AI-powered suggestions.
3. Use the suggestions to complete your code faster and with fewer errors.

### Configuring API Keys

If you want to use a custom AI model, you can configure your API key in the settings:

1. Open the VSCode Settings (`Ctrl+,`).
2. Search for **"AIC"**.
3. Enter your API key in the **"AIC: API Key"** field.

### Example

```javascript
// Example: AI-powered suggestion for a function
function greet(name) {
    // AIC suggests completing this function with:
    return `Hello, ${name}!`;
}
```

## Extension Settings

You can customize AIC's behavior through the following settings:

- **`aic.apiKey`**: Your custom API key for AI services (optional).
- **`aic.model`**: The AI model to use for suggestions (default: `gpt-3.5-turbo`).
- **`aic.language`**: The default language for code suggestions (default: `auto`).

## Known Issues

- **Limited Language Support**: While AIC supports many popular languages, some niche languages may not have full support yet.
- **API Rate Limits**: If you're using a custom API key, be aware of rate limits imposed by the AI service provider.

## Release Notes

### 1.0.0 (Initial Release)

- Initial release of AIC - AI Coding Assistant.
- Added AI-powered code suggestions and error detection.
- Support for multiple programming languages.
- Configurable API key for custom AI models.

### 1.0.1

- Fixed minor bugs related to API key configuration.
- Improved performance and reduced latency for AI suggestions.

---

For more information, visit the [GitHub repository](https://github.com/codelint/aic).

---

## Contributing

We welcome contributions from the community! If you'd like to contribute to AIC, please check out our [GitHub repository](https://github.com/your-username/aic) and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.