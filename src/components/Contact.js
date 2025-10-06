const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 mx-4">Contact Us Page</h1>
            <p>This is Namste React Live Course Chapter 07</p>
            <form>
                <input  type ="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input  type ="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className="border border-black p-2 m-2 rounded-r-lg"> Submit</button>
            </form>
        </div>
    );
}
export default Contact;