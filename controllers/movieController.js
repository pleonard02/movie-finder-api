import axios from "axios";


export async function searchMovies(req, res) {
    const { title } = req.query;
    
    try {
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                s: title,
                apiKey: process.env.OMDB_API_KEY
            }
        });

        if (response.data.Response === "False") {
            return res.status(404).json({
                error: "Movie not found."
            });
        }

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

    try {
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                i: id,
                apiKey: process.env.OMDB_API_KEY
            }
        });
        
        if (response.data.Response === "False") {
            return res.status(404).json({
                error: "Movie not found."
            });
        }

        res.json(response.data);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Something went wrong.'
        });
    }
}