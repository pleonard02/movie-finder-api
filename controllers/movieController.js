import axios from "axios";


export async function searchMovies(req, res) {
    const { title } = req.query;
    
    if (!title) {
        return res.status(400).json({ error: 'Please enter or check the title.' });
    }

    try {
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                s: title,
                apiKey: process.env.OMDB_API_KEY
            }
        })

        res.json(response.data);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Something went wrong.'
        });
    }
}

export async function getMovieById(req, res) {
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ error: 'Please check Movie id.'}); 
    }

    try {
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                i: id,
                apiKey: process.env.OMDB_API_KEY
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Something went wrong.'
        });
    }
}