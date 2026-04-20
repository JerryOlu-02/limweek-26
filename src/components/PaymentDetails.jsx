import "./styles/PaymentDetails.scss";

import Header from "../reusable-components/Header";
import BlockReveal from "../reusable-components/BlockReveal";

import { ReactComponent as CheckMark } from "../assets/svg/checkmark.svg";
import { ReactComponent as FlagNg } from "../assets/svg/flag_ng.svg";
import { ReactComponent as FlagIntl } from "../assets/svg/flag-intl.svg";

import { useRef, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext";
import RevealText from "../reusable-components/RevealText";

export default function PaymentDetails() {
  const pricingRef = useRef(null);
  const { activatePricingRef } = useSectionContext();

  useEffect(() => {
    activatePricingRef(pricingRef);
  }, []);

  return (
    <section ref={pricingRef} className="section payment_details-section">
      <div className="payment_details">
        <Header
          caption="Payment Details"
          description="All the information you need to register, pay, and confirm your attendance with ease."
          dark
          center
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BlockReveal blockColor="rgba(10, 14, 40, 1)">
              <h2>Secure Your</h2>
            </BlockReveal>

            <BlockReveal blockColor="rgba(10, 14, 40, 1)" delay={0.3}>
              <h2>SPOT</h2>
            </BlockReveal>
          </div>
        </Header>

        <aside className="payment_list">
          <div className="payment_item">
            <div className="payment_flag">
              <FlagNg />
            </div>

            <div className="payment_desc">
              <div className="payment_region">
                <RevealText stagger={0.02}>
                  <h6>Local</h6>
                </RevealText>

                <RevealText stagger={0.02}>
                  <p>
                    For participants within Nigeria, payments can be made via
                    bank transfer using the provided local account details. 
                  </p>
                </RevealText>
              </div>

              <div className="payment_price">
                <RevealText stagger={0.03}>
                  <h3>₦250,000</h3>
                </RevealText>

                <RevealText stagger={0.02}>
                  <span>/person</span>
                </RevealText>
              </div>
            </div>

            <div className="bank_details">
              <div className="banks">
                <div>
                  <div className="svg">
                    <CheckMark />
                  </div>

                  <p>Bank Name:</p>

                  <span>Stanbic IBTC</span>
                </div>

                <div>
                  <div className="svg">
                    <CheckMark />
                  </div>

                  <p>Account Number:</p>

                  <span>0021637817</span>
                </div>

                <div>
                  <div className="svg">
                    <CheckMark />
                  </div>

                  <p>Account Name:</p>

                  <span>Zoe Maritime Resources Limited</span>
                </div>
              </div>

              <a
                href="https://www.tix.africa/discover/lagos-international-maritime-week-limweek-2026"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Pay Now
              </a>
            </div>
          </div>

          <div className="payment_item dark">
            <div className="payment_flag">
              <FlagIntl />
            </div>

            <div className="payment_desc">
              <div className="payment_region">
                <RevealText stagger={0.02}>
                  <h6>International</h6>
                </RevealText>

                <RevealText stagger={0.02}>
                  <p>
                    For participants outside Nigeria, payments can be made
                    through the provided international bank account.
                  </p>
                </RevealText>
              </div>

              <div className="payment_price">
                <RevealText stagger={0.02}>
                  <h3>$500</h3>
                </RevealText>

                <RevealText stagger={0.02}>
                  <span>/person</span>
                </RevealText>
              </div>
            </div>

            <div className="bank_details">
              <div className="banks">
                <div>
                  <div className="svg">
                    <CheckMark />
                  </div>

                  <p>Bank Name:</p>

                  <span>First City Monument Bank (FCMB)</span>
                </div>

                <div>
                  <div className="svg">
                    <CheckMark />
                  </div>

                  <p>Account Number:</p>

                  <span>0021637817</span>
                </div>

                <div>
                  <div className="svg">
                    <CheckMark />
                  </div>

                  <p>Account Name:</p>

                  <span>Zoe Maritime Resources Limited</span>
                </div>
              </div>

              <button className="btn">Pay Now</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
