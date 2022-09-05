// import styles from '../styles/PortfolioItem.module.css'

function PortfolioItem(){
    return(
        <div className = {`min-h-[35vw] h-auto w-[40vw] my-[1rem] flex flex-col`}>
            <div className = {`w-full h-[3rem] flex flex-row justify-start items-center pl-3 `}>
                <img className = {`w-[40px] h-[40px] rounded-full mr-3`} src= '/images/work2.jpg' alt = ''/>
                <h1 className = {`font-extrabold text-3xl uppercase`}>Web-3</h1>
            </div>
            <div className = {`w-full h-[3rem] text-sm pl-3 pt-3 flex justify-start items-start `}>
                <p className = {``}>Lorem Ipsum Dolor Sit Amet Adilipsicing Consectur What Is The Meaning Of Life </p>
            </div>
            <div className = {`w-full h-auto border-2 border-grey flex justify-center`}>
                <img className = {`w-full h-auto `} src= '/images/work3.jpg' alt = ''/>
            </div>
            <div className = {`w-full h-[3.5rem] flex justify-start items-center `}>
                <button className = {`w-[42%] h-[2.5rem] bg-[#1877f2] rounded-md text-white mx-3`}>View Live</button>
                <button className = {`w-[42%] h-[2.5rem] bg-[#4b4f56] rounded-md text-white mx-3`}>See Repo</button>
            </div>
        </div>
    )
}

export default PortfolioItem