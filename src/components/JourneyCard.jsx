export default function JourneyCard({src}){
    return (
        <div className="cursor-pointer transition duration-300 hover:brightness-[60%] brightness w-full h-full border-red border border-solid" style={{backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} >
        </div>
    );
}