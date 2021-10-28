
const Header = ({handleOnSubmit, searchTerm, setSearchTerm}) => {
  function handleChange (e){
    setSearchTerm(e.target.value)
  }
  
  return (  
    <form onSubmit={handleOnSubmit}>
      <header>
        <input type="search" 
             placeholder='Search....'
             className='search'
             value={searchTerm}
            //  onChange={(e)=>setSearchTerm(e.target.value)}
            onChange={(e)=>handleChange}
        />
      </header>
    </form>
    
  );
}
 
export default Header;