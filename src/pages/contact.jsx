function Contact() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', height: 'auto', width: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <textarea
                        placeholder="Message"
                        rows="5"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    ></textarea>
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px',
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <br/>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#172736', color: 'white', textAlign: 'center', borderTop: '3px solid #ccc' }}>
    <p>&copy; 2023 Your Bookshop. All rights reserved.</p>
    <p>Email: contact@yourbookshop.com</p>
    <p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            Facebook
        </a>
    </p>
</div>
        </>
    );
}

export default Contact;