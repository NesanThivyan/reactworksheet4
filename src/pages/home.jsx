import pic1 from'../assets/Books2.jpeg';
import pic2 from'../assets/EN books6.jpeg';
import pic3 from'../assets/Auto4.jpeg';
import pic4 from'../assets/Auto5.jpeg';
import pic5 from'../assets/home.webp';




function Home(){
    return(
    <>
    <div style={{ backgroundImage: `url(${pic5})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <img src={pic5} alt="Bookshop Logo" style={{ height: '40px', marginRight: '10px', position: 'absolute', top: '20px', left: '20px' }} /> */}
    </div>
    <br/>
    

    <div style={{ display: 'flex', alignItems: 'center', border: '3px solid #ccc', padding: '50px', borderRadius: '10px', backgroundColor: '#5e86a8', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <img src={pic1} style={{ width: '300px', height: '200px', borderRadius: '50%', marginRight: '20px' }} />
        <div>
            <h2>About Us</h2>
            <p>
                Welcome to our website! We are dedicated to providing the best service and 
                ensuring customer satisfaction. Thank you for visiting!

                Sure! Here's a 100-word promotional paragraph for a bookshop: Discover the joy of reading at our cozy bookshop, your perfect escape into the world of stories, knowledge, and imagination. We offer a wide range of books – from bestsellers and classics to academic texts and children’s favorites. Whether you’re a student, a casual reader, or a book lover, you’ll find something special on our shelves. Our friendly staff is always ready to help you find your next great read. We also offer discounts, gift cards, and a peaceful reading corner. Visit us today and let your next adventure begin with a good book in hand!
            </p>
        </div>
    </div>
    


    <div style={{ marginTop: '30px', padding: '20px', border: '3px solid #ccc', borderRadius: '10px', backgroundColor: '#5e86a8', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', color: '#' }}>Our Book Collections</h2>
        <div style={{ display: 'flex',marginTop: '20px', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>

            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src={pic2} alt="Book 1" style={{ width: '150px', height: '200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} /><br/>
                <button style={{ marginTop: '10px', color: '#555' }}>GAI MAN</button>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src={pic3} alt="Book 2" style={{ width: '150px', height: '200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} /><br/>
                <button style={{ marginTop: '10px', color: '#555' }}>GANDHI</button>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src={pic4} alt="Book 3" style={{ width: '150px', height: '200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} /><br/>
                <button style={{ marginTop: '10px', color: '#555' }}>BARAKOBAMA</button>
            </div>
        </div>
    </div>
<div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#27435c', color: 'white', textAlign: 'center', borderTop: '3px solid #ccc' }}>
    <p>&copy; 2023 Your Bookshop. All rights reserved.</p>
    <p>Email: contact@yourbookshop.com</p>
    <p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            Facebook
        </a>
    </p>
</div>


</>


    )
}
export default Home;    