const pool = require('../utils/dal_mysql');

const createUsersTable = async () => {
    try {
        const connection = await pool.getConnection();
        await connection.query(`
      CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        connection.release();
        console.log('Users table created successfully');
    } catch (error) {
        console.error('Error creating users table:', error);
    }
};

createUsersTable();
