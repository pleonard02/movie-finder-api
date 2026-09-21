import express from 'express';
import { 
    searchMovies, 
    getMovieById,
} from "../controllers/movieController.js";

const router = express.Router();

router.get('/search', searchMovies);

router.get('/movies/:id', getMovieById); 

export default router;