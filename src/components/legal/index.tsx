import React, {FC, useContext} from 'react';
import {ModalWrapper, HeaderLogo, LegalContent} from "./index.styled"
import {Context} from "../../context/context"
import btn_close from "../../assets/images/button_close.svg"
import MTLogo from "../../assets/images/main_logo_1_dark.svg"


const LegalModal:FC = () => {
  const {setOpenLegal} = useContext(Context);

  return (
    <ModalWrapper className={'fade'}>
      <HeaderLogo>
        <img src={MTLogo} alt="Maple Terrace Uptown Dallas"/>
        <img src={btn_close} alt="Close button" onClick={() => setOpenLegal(false)}/>
      </HeaderLogo>

      <LegalContent>
        <aside>
          <a href="#terms">TERMS OF USE</a>
          <a href="#privacy">PRIVACY POLICY</a>
        </aside>
        <section>
          <p id={"terms"} className={'copy_t2'}>
            Terms of Use
            <br/><br/>

            Effective: February 25, 2021
            <br/><br/>

            3001 MAPLE LP (“Hines”), which is the developer of MAPLE TERRACE, is pleased to offer you access to the web site accessible at <a
            href="https://mapleterracedallas.com/" target={'_blank'}>MAPLETERRACEDALLAS.COM</a> (the “Site”). The Site is governed by these Terms of Use. Please read these Terms of Use carefully. By accessing the Site or downloading any materials from the Site, you agree to these Terms of Use. If you do not agree to them, do not use the Site or download any materials, and exit the Site immediately. These Terms of Use are in addition to any other agreement between you and Hines (or any of its affiliates), including those relating to any of the information or materials available via the Site.
            <br/><br/>

            Authorized Use. Use of the Site is for informational purposes only. Hines is not responsible or liable for the accuracy, completeness, usefulness or availability of any information or other content, data, text, URLs, graphics or any other materials (collectively, the “Content”) transmitted or made available via the Site. Hines is not responsible or liable for any decisions made in reliance on such information.
            <br/><br/>

            Any use or attempted use of the Site (I) for any unlawful, unauthorized, fraudulent or malicious purpose, or (ii) that could damage, disable, overburden, or impair any server, or the network(s) connected to any server, or (iii) that could interfere with any other party’s use and enjoyment of the Site, or (iv) to gain unauthorized access to any other accounts, computer systems or networks connected to any server or systems through hacking, password mining or any other means, or (v) to access systems, data or information not intended by Hines to be made accessible to a user, or (vi) to obtain or attempt to obtain any materials or information through any means not intentionally made available by Hines, or (vii) for any use other than the purpose for which it was intended, is prohibited.
            <br/><br/>

            Site Content. All content accessible within the Site (including without limitation, the “look and feel” of the Site, all text, formatting, graphics, designs, animation, images, audio, and other content, as well as all trademarks and service marks) is proprietary to us or to other parties who have consented to our use of it in accordance with applicable law, including applicable international treaties.
            <br/><br/>

            You may not (I) copy, reproduce, transmit, alter, publish, distribute, or create derivative works from the Site content; (ii) frame or deep-link to the Site; or (iii) use meta tags or any other hidden text utilizing our or our content providers’ trademarks or service marks on or in connection with another domain name or Site. The only exception to this is that you may print out a copy of pages solely for your personal use. In so doing, you agree that you will not remove or alter any copyright, trademark or any other proprietary notice or legend appearing in any of the Site content.
            <br/><br/>

            All names, logos and trademarks (“Hines’ Trademarks”) are the property of Hines, its affiliates, related companies or its licensors or joint venture partners. Hines’ Trademarks may be used only as stated in these Terms of Use or with prior written permission from Hines.
            <br/><br/>

            Submissions. No questions, comments, suggestions, information, ideas, concepts, photographs, graphics or other materials, whether oral, written or electronic (collectively, “submissions”), will be considered or treated as confidential information. Accordingly, do not submit or send any submission to us that you consider contains confidential or proprietary information. Any submission, or any other content of any sort transmitted by you, other than personal data which is covered by our Privacy Policy, will be considered non-confidential and non-proprietary and Hines will not be subject to any restrictions or obligations with regard to it.
            <br/><br/>

            Privacy.Privacy. Unless otherwise addressed in these Terms of Use, your use of the Site is subject to Hines’ Privacy Policy. It is important that you read and understand the terms of the Privacy Policy. Hines may cooperate with and disclose information to any authority, government official or third-party, without giving any notice to you, in connection with any investigation, proceeding or claim arising from illegal action or infringement, whether related or unrelated to your use or misuse of the Site.
            <br/><br/>

            Violations.Violations. Hines reserves the right to take whatever lawful actions it may deem appropriate in response to actual or suspected violations of the foregoing, including, without limitation, the suspension or termination of your access to the Site and/or account with the Site if Hines offers you an account. Hines may cooperate with legal authorities and/or third parties in the investigation of any suspected or alleged crime or civil wrong. Except as may be expressly limited by Hines’ Privacy Policy, Hines reserves the right at all times to disclose any information as Hines deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials you provide to Hines through the Site, in whole or in part, in Hines’ sole discretion.
            <br/><br/>

            Third Party Web Sites. In some instances, the Site may reference or link to third party web sites. Should you choose to visit those web sites, please remember that Hines is not responsible for their content, their terms of use, or their privacy policies. We encourage you to read and review the terms of use and other legal terms and policies of all web sites you visit. You understand that Hines will not be liable to you in respect of any loss or damage that you may suffer by using those web sites. You agree that you will not involve Hines in any dispute between you and a third party.
            <br/><br/>

            Indemnity. You agree to indemnify and hold Hines, and its owners, partners and affiliates, and their respective officers, directors, employees, representatives, contractors and agents (collectively, the “Indemnified Parties”) harmless from any actions, liability, loss, claim, damage or expense, including attorneys’ fees and expenses, related to your (I) use of the Site, (ii) violation of these Terms of Use, or (iii) reliance on any of the materials or information or other content available via the Site.
            <br/><br/>

            Liability and Warranty Disclaimer. Hines makes no representation or warranties, express or implied, with respect to the accuracy or completeness of the content, information, graphics, text, links, or other material contained on this Site and is not responsible for any errors or omissions in the content of this Site. To the extent permitted by applicable law, everything on the Site is provided “as is” without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, habitability, or non-infringement. You acknowledge that any reliance upon the Site or the information, material, systems, services or products contained or discussed therein shall be at your sole risk. To the extent permitted by applicable law, in no event will any Indemnified Party be liable for any damages whatsoever, including special, indirect, consequential or incidental damages or damages for loss of profits, revenue, use, or data, whether brought in contract or tort, arising out of or connected with the Site or your use or reliance upon any of the content or any information accessed from the Site. In no event will the collective liability of Hines and its subsidiaries, affiliates, licensors, service providers, content providers, employees, agents, officers, and directors to any party (regardless of the form of action, whether in contract, tort, or otherwise) exceed one thousand dollars ($1,000). Additional disclaimers may appear from time to time within the body of the Site and are incorporated herein by reference.
            <br/><br/>

            No Investment Advice. None of the information provided through the Site constitutes investment advice, and the views expressed should not be taken as advice to buy or sell any security. Decisions based on information contained or provided through the Site are your sole responsibility and are made at your own risk.
            <br/><br/>

            Nothing on or in the Site shall be considered a solicitation or offer to buy or sell any security, future, option or other financial instrument or to offer or provide any investment, tax, financial or legal advice or service to any person in any jurisdiction. Any overviews provided through the Site are intended to be general in nature. While intended to be helpful, these overviews are no substitute for professional tax, financial or legal advice. Investors should seek such professional, financial or legal advice for their particular situation.
            <br/><br/>

            No Offer. This content posted on the Site is provided solely for informational purposes. This Site is not intended to be, and does not constitute, an offer for the sale, purchase or lease of real property. Except for your agreement to abide by these Terms of Use, nothing in this Site or your use of the content contained herein shall be interpreted as giving rise to or forming the basis of a contract, commitment or obligation.
            <br/><br/>

            Real Property Disclaimers / Disclosures. All information posted on this Site is subject to change without notice. The information and materials contained in this Site regarding real estate or property developments, including photographs, renderings, plans, prices, facilities, land uses, improvements, amenities, dimensions, specifications, views, scenes, materials and availability, are proposed, are conceptual only and are subject to change, modification or cancellation without notice or obligation. Scenes, pictures, drawings, illustrations and/or views shown may be artist renderings and may be locations or activities not on, or related to, the property or development. Actual views may vary, and views described or depicted cannot be relied upon as the actual view from any proposed unit, home, lot, amenity or other improvement or area. Maps are not to scale and are for relative location purposes only. There is no guarantee that the facilities, services, features, amenities, improvements, views, scenes or specifications described, shown or depicted within the Site will be constructed or otherwise provided, and if constructed or provided, that they will be of the same type, style, size or nature as described or depicted. Ownership or rental of a residence in a development community does not guarantee access to, or the right to use, amenities, such as clubs or marinas, which may require the purchase of separate memberships and may be subject to other conditions on use. Certain amenities may not be complete and completion is neither warranted nor guaranteed.
            <br/><br/>

            Disputes, Forum, and Governing Law. These Terms of Use and all matters relating to the Site, including any disputes, claims, suits, or causes of action concerning the interpretation, violation, invalidity, non-performance, or termination of these Terms of Use, shall be governed by and construed in accordance with the laws of the State of Texas without giving effect to any choice or conflict of law provision or rules. If you take legal action relating to these Terms of Use or the Site, you agree to file such action only in state court in Harris County, Texas, or federal court within the Southern District of Texas, and you consent and submit to the personal jurisdiction of those courts for the purposes of litigating any such action or defending any action brought against you relating to these Terms of Use or the Site. You hereby waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
            <br/><br/>

            Definitions. When we say “we” or “us” or “Hines” in these Terms of Use, we mean 3001 MAPLE LP, our affiliates and those agents we use to provide services on our behalf. When we say “Site”, we mean <a
            href="https://mapleterracedallas.com/" target={'_blank'}>MAPLETERRACEDALLAS.COM</a>
            <br/><br/>

            Other. Hines reserves, in its sole discretion, the right to revise these Terms of Use at any time by updating this posting and to monitor and remove postings and/or discontinue Site availability at any time without notice.
            <br/><br/>

            If any term, condition or provision of these Terms of Use is determined to be unlawful, invalid, void or for any reason unenforceable, the validity and enforceability of the remaining terms, conditions and provisions shall not in any way be affected or impaired thereby.
            <br/><br/>

            If you have any questions, complaints or comments regarding this Site, you may contact us at: <br/>
            MAPLE TERRACE <br/>
            Webmaster <br/>
            3001 MAPLE LP <br/>
            2800 Post Oak Blvd <br/>
            Houston, TX 77056 <br/>
            Email: <a href="mailto:HinesCorporate.Communications@hines.com">HinesCorporate.Communications@hines.com</a> <br/>

          </p>
          <p id={"privacy"} className={'copy_t2'}>
            Privacy Policy
            <br/><br/>

            Effective: February 25, 2020
            <br/><br/>

            3001 MAPLE LP (“Hines”), which is the developer of MAPLE TERRACE, is sensitive to the confidentiality of your personal information and has created this Privacy Policy in order to demonstrate Hines’ commitment to on-line privacy. This Privacy Policy applies to all information you provide to Hines, or Hines obtains from you, through the MAPLE TERRACE website accessible at <a
            href="https://mapleterracedallas.com/" target={'_blank'}>MAPLETERRACEDALLAS.COM</a> (the “Site”). By using the Site, you consent to and accept this Privacy Policy. If you do not agree to the terms and conditions of this Privacy Policy, do not use the Site.
            <br/><br/>

            If we change our Privacy Policy, we will post the changes on this page and may place notices on other pages of the Site so that you may be aware of the information we collect and how we use it at all times.
            <br/><br/>

            The Type of Information We Collect. As visitors browse the Site, Hines collects information about the visit. For example, via web server logs and browser cookie files, Hines monitors statistics such as the number of visitors we have to our Site, which pages are visited, the browsers our visitors use and the domains our visitors come from, but none of this information is associated with any visitor as an individual. We do this through Google Analytics, which ensures that all data collected in this manner is anonymous.
            <br/><br/>

            Some pages on this web site use a technology called “cookies”. A cookie is a token that a server gives to your browser when you access a web site. Cookies are capable of storing many types of data. Cookies help provide additional functionality to the Site or help us analyze Site usage more accurately. For instance, our server may set a cookie that keeps you from having to enter a password more than once during a visit to the Site. In all cases in which cookies are used, we will not collect personally identifiable information except with your explicit permission. With most Internet browsers, you can erase cookies from your computer hard drive, block all cookies, or receive a warning before a cookie is stored. Please refer to your browser instructions or help screen to learn more about these functions.
            <br/><br/>

            If you choose to submit any personal information on any page of the Site by completing requests for information or any form, we may collect:
            Contact information (such as name, postal or e-mail address, zip code, and phone number);
            Your professional information (such as occupation, job title, department, and name of organization); and
            Content you provide (such as reason for inquiry, and any other comments or information you provide to us).
            <br/><br/>

            How We Use Your Personal Information. When you provide us with your personal information, we may use such information to contact you about the offerings or services in which you have expressed an interest.
            <br/><br/>

            We may also use the personal information we obtain about you for the following purposes:
            Responding to your enquiries;
            Operating, evaluating, and improving our business (including developing new products and services;
            Managing our communications;
            Determining the effectiveness of, and optimizing, our advertising;
            Analyzing our products, services, websites, mobile applications, and any other digital assets;
            Facilitating the functionality of our websites, mobile applications, and any other digital assets;
            Anonymizing personal information and preparing and furnishing aggregated data reports showing anonymized information;
            Enforcing the Terms and Conditions for use of the Site;
            As may be required by applicable laws and regulations or requested by any judicial process or governmental agency having or claiming jurisdiction over this Site or Hines; and
            In other ways for which we provide specific notice at the time of collection.
            <br/><br/>

            Personal Information We Share. In connection with one or more of the purposes outlined in the “How we use your personal information” section above, we may disclose personal information collected from you to:
            Affiliated companies of Hines;
            Professional advisors and third parties that provide services to us and/or companies affiliated with Hines (such as IT systems providers, platform providers, financial advisors, and consultants (including lawyers and accountants);
            Providers of HR and recruitment services and other goods and services providers (such as providers of marketing services);
            Intermediaries, brokers, and other individuals and entities that partner with us;
            Competent authorities (including any national and/or international regulatory or enforcement body or court or other form of tribunal, where we (or any other company affiliated with Hines) are required to do so by applicable law or regulation at their request); and
            Any central or local government department and other statutory or public bodies.
            <br/><br/>

            International Data Transfers. As a global company, Hines may need to transfer your personal data out of the country in which it was originally collected. For personal data collected in the European Economic Area (“EEA”), this may mean transfers outside the EEA. You should be aware that these countries may not have similar data protection laws to the EEA. In such cases, Hines will ensure that there are adequate safeguards in place to protect your personal information with the aim of ensuring that your privacy rights continue to be protected as outlined in this policy. If you object to your personal information being transferred or used in this manner please do not register with or use the Site.
            <br/><br/>

            How We Protect Your Personal Information. We have put in place various security procedures as set out in this policy. Hines takes the security and privacy of personal information extremely seriously. We have strict internal procedures which cover the storage, access, and disclosure of your information.
            The Site uses an SSL certificate, which both verifies our identity and secures the safe transmission of information between your browser and our server.
            We conduct daily malware scans to detect any malicious hacking attempts, which may compromise the security of our site.
            <br/><br/>

            How Long We Keep Your Personal Information. We will hold your personal information on Hines’ systems for as long as is necessary to fulfill the purpose for which it was collected or to comply with legal, regulatory, or internal policy requirements.
            <br/><br/>

            Modification of Your Choices and Preferences. Opt-Out Right: If you do not wish to receive communications from Hines, its affiliates, or third parties (such as home builders) regarding offers or other third party products and services, you may opt out of receiving such communications by e-mailing or writing to Hines as provided in the “More Information” section below; or in the event that you receive an e-mail from Hines regarding such matters, you may simply reply to the e-mail in question and request that you receive no further correspondence from Hines regarding such matters. You may also follow this procedure to change or update information you have previously provided to Hines at any time.
            <br/><br/>

            Your election not to receive promotional and marketing correspondence from us will not: (a) preclude us from corresponding with you, by e-mail or otherwise, regarding your existing or past relationship with us, and (b) preclude us, including our employees, contractors, agents and other representatives, from accessing and viewing your personal information in the course of maintaining and improving the site.
            <br/><br/>

            Your Rights – EU Users. If you are an individual in the European Union, you have additional rights in relation to your personal information. In particular, you have a right to:
            Object to the processing or your personal information;
            Request a copy of personal information we hold about you;
            Ask that we update the personal information we hold about you, or correct such personal information that you think is incorrect or incomplete;
            Ask that we delete personal information that we hold about you, or restrict the way in which we use such personal information; and
            Withdraw consent to our processing of your personal information (to the extent such processing is based on consent).
            <br/><br/>

            You may exercise any of your rights, or ask questions about our use of your personal information, by e-mailing or writing to Hines as provided in the “More Information” section below. You may also use these contact details if you wish to make a complaint to us relating to your privacy. If you are unhappy with the way we handled your personal information or any privacy query or request that you have raised with us, you also have a right to complain to a data protection regulator in the place where you live or work, or in the place where you think an issue in relation to your data has arisen. A list of national data protection regulators can be found here (link to: ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm)
            <br/><br/>

            Third Party Information. The Site may provide you with links to other web sites. This Privacy Policy does not apply to any information that you may provide to third parties, such as through other sites linked to through the Site. Hines is not responsible for those sites and cannot control the content of what is offered on those sites, or on links from those sites, or the privacy policy or data security, if any, of those sites.
            <br/><br/>

            Terms of Use. Please take the time to read our Terms of Use for the Site, including the limitations on damages and application of the law of the state of Texas. These Terms of Use govern our interactions as a legal contract, and we welcome and encourage the time you spend becoming familiar with these legal Terms of Use as much as we welcome the time you spend on our Site and your support of Hines.
            <br/><br/>

            Privacy Policy for Children. This Web site is not directed to children. We do not knowingly collect information from children under the age of 13 on the Site. If you are under the age of 13, please do not provide any personal information to us. If we become aware that we have collected personal information from a child under the age of 13, we will make commercially reasonable efforts to delete such information from our database.
            <br/><br/>

            Definitions. When we say “we” or “us” or “Hines” in this Privacy Policy, we mean 3001 MAPLE LP, our affiliates, and those agents we use to provide services on our behalf. When we say “Site”, we mean <a
            href="https://mapleterracedallas.com/" target={'_blank'}>MAPLETERRACEDALLAS.COM</a>.
            <br/><br/>

            Changes in Privacy Policy. Hines reserves, in its sole discretion, the right to revise this Privacy Policy at any time by updating this posting.More Information. If you have any questions about this Privacy Policy or wish to contact Hines in connection with any information contained in this Privacy Policy, regardless of which country you may be writing from, please write to:
            <br/>
            MAPLE TERRACE <br/>
            Webmaster <br/>
            3001 MAPLE LP <br/>
            2800 Post Oak Blvd <br/>
            Houston, TX 77056 <br/>
            Email: <a href="mailto:HinesCorporate.Communications@hines.com">HinesCorporate.Communications@hines.com</a>
          </p>
        </section>
      </LegalContent>
    </ModalWrapper>
  );
};

export default LegalModal;