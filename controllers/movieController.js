import axios from "axios";


export function searchMovies(req, res) {
    const { title } = req.query;
    
    if (!title) {
        return res.status(400).json({ error: 'Please enter or check the title.' });
    }

    axios.get('https://www.omdbapi.com/', {
        params: {
            s: title,
            apiKey: process.env.API_KEY
        }
    })
        .then(response => {
            res.json(response.data); 
        })
        .catch(error => {
            console.error('Error fetching data: ', error);

            return res.status(500).json({
                error: 'Failed to fetch movie data.'
            });
        });
}

export function getMovieById(req, res) {
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ error: 'Please check Movie id.'}); 
    }

    axios.get('https://www.omdbapi.com/', {
        params: {
            i: id,
            apiKey: process.env.API_KEY
        }
    })
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);

            return res.status(500).json({
                error: 'Failed to fetch movie data.'
            });
        });
}