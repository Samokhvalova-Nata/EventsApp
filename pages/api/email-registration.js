import path from 'path';
import fs from 'fs';

function buildPath() {
    return path.join(process.cwd, 'data', 'data.json')
};

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
};

export default function handler (req, res) {
    const { method } = req;

    const filePath = buildPath();
    const {events_categories, allEvents} = extractData(filePath);

    if (method === "POST") {
        const { email, eventId } = req.body;
        res.status(200).json({
            message: `You has been registered successfully with the email: ${email} ${eventId}`,
        })
    }

};