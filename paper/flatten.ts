const fs = require('fs');
const path = require('path');

function readFileAndProcess(filePath, indentationLevel = 0) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const indentedContent = indentHeaders(fileContent, indentationLevel);

    // Recursively process the referenced files in the current file, increasing the indentation level
    processFile(indentedContent, path.dirname(filePath), indentationLevel + 1);
    console.log(`\n`);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
  }
}

function indentHeaders(content, indentationLevel) {
  return content.replace(/^(\s*#+)/gm, (_, headers) => {
    const newIndentation = headers + '#'.repeat(indentationLevel);
    return newIndentation;
  });
}

function processFile(content, baseDir, indentationLevel) {
  const lines = content.split('\n');

  for (const line of lines) {
    const imageLinkMatch = line.match(/!\[.*?\]\(([^)]+)\)/);

    if (imageLinkMatch) {
      const imagePath = imageLinkMatch[1];
      const imageFilePath = path.join(baseDir, imagePath);

      if (fs.existsSync(imageFilePath)) {
        // Pass the folder information and indentation level to the recursive call
        readFileAndProcess(imageFilePath, indentationLevel);
      } else {
        console.error(`Image file not found: ${imageFilePath}`);
      }
    }

    const filePathMatch = line.trim().match(/^([^\/].*\.md)/);

    if (filePathMatch) {
      const filename = filePathMatch[1];
      const filePath = path.join(baseDir, filename);

      if (fs.existsSync(filePath)) {
        // Pass the folder information and indentation level to the recursive call
        readFileAndProcess(filePath, indentationLevel);
      } else {
        console.error(`File not found: ${filePath}`);
      }
    } else {
      console.log(line);
    }
  }
}

function main(mainFile) {
  try {
    const mainFilePath = path.join(__dirname, mainFile);

    if (fs.existsSync(mainFilePath)) {
      const mainContent = fs.readFileSync(mainFilePath, 'utf-8');
      processFile(mainContent, __dirname, 0); // Start with indentation level 0
    } else {
      console.error(`Main file not found: ${mainFilePath}`);
    }
  } catch (error) {
    console.error(`Error reading main file: ${mainFile}`, error);
  }
}

// Specify the main file to process
const mainFile = process.argv[2];
main(mainFile);
