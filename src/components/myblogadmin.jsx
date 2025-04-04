import React, { useState } from 'react';
import BlogsAdmin from '../components/blogsadmin.jsx';
import styles from './myhomeadmin.module.css'; // Menggunakan gaya yang sama dengan halaman admin lainnya

const MyBlogsAdmin = () => {
    const [showBlogsAdmin, setShowBlogsAdmin] = useState(false);

    const navigateTo = (path) => {
        window.location.href = path;
    };

    return (
        <div className={styles.adminContainer}>
            <h2>Blogs Admin Panel</h2>

            {/* Container untuk tombol "Go to" */}
            <div className={styles.goToContainer}>
                <button onClick={() => navigateTo('/adminonlydama/servicesdama')} className={`${styles.adminButton} ${styles.goToButton}`}>Go to Services Page</button>
                <button onClick={() => navigateTo('/adminonlydama/worksdama')} className={`${styles.adminButton} ${styles.goToButton}`}>Go to Works Page</button>
                <button onClick={() => navigateTo('/adminonlydama/footerdama')} className={`${styles.adminButton} ${styles.goToButton}`}>Go to Footer Page</button>
                <button onClick={() => navigateTo('/adminonlydama/aboutdama')} className={`${styles.adminButton} ${styles.goToButton}`}>Go to About Page</button>
                <button onClick={() => navigateTo('/adminonlydama/homedama')} className={`${styles.adminButton} ${styles.goToButton}`}>Go to Home Page</button>
            </div>

            {/* Container untuk tombol "Show" */}
            <div className={styles.showContainer}>
                <button
                    onClick={() => setShowBlogsAdmin(!showBlogsAdmin)}
                    className={`${styles.adminButton} ${showBlogsAdmin ? styles.active : ''}`}
                >
                    {showBlogsAdmin ? 'Hide Blogs Admin' : 'Show Blogs Admin'}
                </button>
            </div>

            {showBlogsAdmin && <BlogsAdmin />}
        </div>
    );
};

export default MyBlogsAdmin;