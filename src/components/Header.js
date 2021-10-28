
const Header = ({handleOnSubmit, searchTerm, setSearchTerm}) => {
  
  
  return (  
    <form onSubmit={handleOnSubmit}>
      <header>
        <input type="search" 
             placeholder='Search....'
             className='search'
             value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)}
            
            
        />
      </header>
    </form>
    
  );
}
 
export default Header;