const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.put('/update-file', async (req, res) => {
    try {
        // Fetch the current file metadata to get the `sha`
        const { data: existingFile } = await axios.get(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
            }
        );

        // Convert new JSON data to Base64
        const updatedContent = Buffer.from(JSON.stringify(req.body, null, 2)).toString('base64');

        // Update the file using GitHub API
        const response = await axios.put(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
            {
                message: 'Updated JSON file via AllInOneX API',
                content: updatedContent,
                sha: existingFile.sha, // Required to update the file
            },
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
            }
        );

        res.status(200).json({ message: 'File updated successfully!', data: response.data });
    } catch (error) {
        res.status(500).json({ message: 'Error updating file', error: error.message });
    }
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
