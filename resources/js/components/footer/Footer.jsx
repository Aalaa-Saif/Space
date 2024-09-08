import React, { useEffect } from "react";
import footer from "../../../css/footer/Footer.module.css";

function Footer(){

    return(
        <div>
            <footer className={footer.footer} id="footer">
                <div class="container-fluid border-top rounded">
                    <div class="row">
                        <div class="col-md-4 offset-md-8 mt-3 text-light mt-5">
                            <h4>Contact Me:</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 offset-md-8 mb-1">
                            <span class={footer.footer_font}>aalaa.saif96@gmail.com</span>
                        </div>
                        <div class={"col-md-2 offset-md-8 mb-5 "+footer.footer_font}>
                            &#169;2024
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;

