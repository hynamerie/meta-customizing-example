// function Promo() {
//     return (
//         <div className="promo-section">
//             <div>
//                 <h1>Don't miss this deal!</h1>
//                 </div>
//                 <div>
//                 <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
//             </div>
//         </div>
//     );
// };
function Promo(props) {
    const styles = {
        color: "tomato",
        fontSize: "40px"
    }
    return (
        <div className="promo-section">
            <div>
                <h1 style={ {color:"tomato", fontSize:"40px", fontWeight:"bold"} }>
                    {props.heading}
                </h1>
                <h1 style={styles}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
};

export default Promo;