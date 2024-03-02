import Image from 'next/image';
import React from 'react';
import nextImage from '../../assets/nextjs-image-gallery.png'


const AlbumPage = () => {
    return (
        <div>
            <h2>Using Image component</h2>
            <Image src={`https://www.google.com/search?sca_esv=2e3cbffe5a601d85&sca_upv=1&rlz=1C1KNTJ_enBD1086BD1086&sxsrf=ACQVn08dtT7kMdPGjjiscZs-JlKBpr6dTg:1709362098434&q=Next+js+image+gallery&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjZnK2F_tSEAxXhTGwGHeGiCDYQ0pQJegQIDxAB&biw=1229&bih=584&dpr=1.56#imgrc=5cSjl2-OsrKabM`} width={500} height={500} alt='next js image' />

            <h2>Using Image component</h2>
            <Image src={nextImage} width={500} height={500} alt='next js image' />



        </div>
    );
};

export default AlbumPage;