// const database = require('../services/db');
// require('./authControllers');
// exports.getAllBooks = async(req,res)=>{
//     try {
//         // const username = req.session.user;
//         const limit = parseInt(req.query.limit, 10) || 10;
//         const page = parseInt(req.query.page, 10) || 1;
//         const start = (page - 1) * limit;
//         const end = start + limit;



    
//         const result = await database.pool.query(
//             `SELECT 
//                 id, 
//                 title, 
//                 author_name, 
//                 author_birth_year, 
//                 author_death_year, 
//                 subjects, 
//                 bookshelves, 
//                 languages, 
//                 copyright, 
//                 media_type, 
//                 download_count
//             FROM 
//                 books
//             ORDER BY 
//                 title
//             LIMIT $1
//             OFFSET $2`,
//             [limit,start]);

        
//         const countResult = await database.pool.query(
//             `SELECT COUNT(*) AS total
//              FROM books`
//         );

//         const books = result.rows;
//         const total = parseInt(countResult.rows[0].total, 10);

//         return res.status(200).json({
//             books,
//             total,
//             page,
//             limit
//         });
//     } catch (error) {
//         return res.status(500).json({ error: error.message});
//     }
// }

// exports.postAllBooks = async (req,res)=>{
//     try{
//         // const username = req.session.user;
//         const result = await database.pool.query(
//             `INSERT INTO books (
//                 id,
//                 title, 
//                 author_name, 
//                 author_birth_year, 
//                 author_death_year, 
//                 subjects, 
//                 bookshelves, 
//                 languages, 
//                 copyright, 
//                 media_type,  
//                 download_count )
//                 VALUES
//                 ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
//                 [req.body.id, req.body.title, req.body.author_name,
//                      req.body.author_birth_year, req.body.author_death_year,
//                     req.body.subjects, req.body.bookshelves,req.body.languages,
//                     req.body.copyright, req.body.media_type,req.body.download_count]
//         )
//     }catch{
//         return res.status(500).json({error: error.message})
//     }
// }
const book = require("../db/models/book");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
exports.createBook = catchAsync(async(req,res,next)=>{
    
    const body = req.body;
    // const userId = req.user.id;
    try{
        const newBook = await book.create({
            id: body.id,
            title: body.title,
            // authors: body.authors,
            // translators: body.traslators,
            subjects: body.subjects,
            // bookshelves: body.bookshelves,
            languages: body.languages,
            copyright: body.copyright,
            media_type: body.media_type,
            // formats: body.formats,
            download_count: body.download_count,
            // createdAt: new Date(),
            // updatedAt: new Date(),
        });
        res.status(201).json({
            status: 'success',
            data: {
                book: newBook,
            },
        });
    }catch(error){
    return res.status(500).json({
        error: error.message,
    })
}
});

exports.getAllBooks = catchAsync(async (req,res,next)=>{
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;
    const offset = (page - 1) * limit;
    
    const { count, rows } = await book.findAndCountAll({
        limit,
        offset
    });

    return res.json({
        status: 'success',
        statusCode: 200,
        data: {
            books: rows,
            total: count,
            page,
            limit
        }
    })
})

