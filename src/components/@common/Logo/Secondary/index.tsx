import SVG, { ISVG } from '@common/SVG';

function SecondaryLogo({ color, ...rest }: ISVG) {
  return (
    <SVG
      viewBox="0 0 333 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.25293 0.529297H21.3044L16.9703 85.9736H19.447L31.4429 22.0135L36.2429 22.0135L48.2389 85.9736H50.7155L46.3814 0.529293L67.4329 0.529291L60.7487 118.789L38.2682 118.789L33.8704 55.3573C34.394 55.9563 35.1387 56.4568 36.1073 56.435C38.3252 56.3852 38.9754 53.5893 38.0372 52.2799C37.5825 51.6452 36.6414 50.8085 35.7555 50.021C34.8139 49.1838 33.9346 48.4022 33.7686 47.9778C33.6021 48.3944 32.6902 49.1489 31.7084 49.9611C30.755 50.7499 29.7356 51.5933 29.2687 52.235C28.321 53.5375 28.9506 56.3381 31.1682 56.4042C32.1647 56.4339 32.9262 55.9718 33.4564 55.3536L29.4176 118.789H6.93709L0.25293 0.529297ZM243.134 5.27969L218.425 5.27969V47.8544C218.229 47.523 218.019 47.1641 217.795 46.7816C213.93 40.1823 205.957 26.5709 199.405 26.5709C190.603 26.5709 188.229 36.8714 188.229 43.3284L188.23 104.824C188.427 108.872 190.03 117.184 194.856 118.045C200.889 119.122 202.768 118.045 204.35 117.123C204.967 116.763 207.362 113.276 210.143 109.226L210.144 109.226L210.144 109.225L210.145 109.225L210.145 109.224L210.146 109.223C212.999 105.068 216.259 100.322 218.425 97.7498V118.789L243.134 118.789C243.134 118.789 235.76 111.706 234.983 67.8213C234.205 23.9363 243.134 5.27969 243.134 5.27969ZM218.425 53.7713L218.425 92.6887C217.948 94.2499 216.496 95.3854 214.779 95.3854C212.673 95.3854 210.966 93.6787 210.966 91.5733L210.966 54.8868C210.966 52.7814 212.673 51.0747 214.779 51.0747C216.496 51.0747 217.948 52.2102 218.425 53.7713ZM81.7044 36.5115H87.265V39.7356H93.2893V42.3839H96.3014V45.1474H99.4293V51.4804H103.021V57.6982H105.569V63.8009H109.045V73.0126L112.636 73.0126L112.636 90.9752H115.301V103.411H112.636V109.398H115.301V106.865H118.197V97.4234H121.209V94.0843H124.22L124.221 66.6796H121.209V49.0623H118.197V39.7356H115.301V36.5115H111.825V33.9783H109.045V30.4088H105.569V27.7604L90.6248 27.7604V30.4088L84.6007 30.4088V33.1723L81.7044 33.1723V36.5115ZM81.7045 36.9723V70.0191H84.0216V79.1155H87.1495L87.1495 88.4423H90.5091V94.7753H93.9846V100.302H96.1857V103.411H99.5453V107.556H105.685V110.435L111.941 110.435V113.314L108.582 113.314V115.732H105.685V118.495H87.1495V115.732H84.0216V113.314H81.7045V110.435H78.2291V103.411H75.4485V97.6539H72.0889V48.602H74.7534V42.8447H78.2291L78.2291 36.9723H81.7045ZM132.138 27.1238L150.191 27.1238V43.8885C151.634 42.6297 155.018 38.2505 157.007 34.124C159.494 28.966 161.705 26.5712 167.784 26.5712C173.863 26.5712 178.1 32.4661 178.1 38.8216V118.495L158.297 118.495L158.297 47.0192C157.376 45.2691 153.875 42.819 150.191 47.0192V118.495H132.138L132.138 27.1238ZM312.108 119.118H295.454V29.0503L311.63 29.0503V49.1045H312.267C314.498 38.0219 320.156 27.7602 327.008 27.7602C328.682 27.7602 330.833 28.1121 332.347 28.5225V50.4531C330.793 49.7495 327.566 49.1045 325.215 49.1045C317.685 49.1045 312.108 56.8447 312.108 67.9273V119.118ZM266.069 120.421C277.641 120.421 285.416 109.671 287.284 93.1369L275.1 93.1369C273.784 98.4535 270.692 102.076 266.283 102.076C259.702 102.076 255.477 93.7212 255.477 80.1083H287.59V73.2727C287.59 42.6584 277.886 27.7602 265.549 27.7602C251.773 27.7602 242.804 46.5144 242.804 74.2075C242.804 102.66 251.651 120.421 266.069 120.421ZM255.477 64.8012C255.783 54.5185 259.885 46.047 265.763 46.047C271.488 46.047 275.467 53.9343 275.498 64.8012H255.477ZM81.32 235.356H70.0512C70.0512 235.356 69.9848 230.24 69.972 223.78H69.7272V226.854H66.5737V229.268H64.0509V232.671H60.8974V235.196H47.3374V232.671H41.8713V230.037H39.2434V228.212H38.1724V222.614H35.0187V217.126H32.601V170.367H35.6494V164.878H38.1724V158.183H41.3258V155.439H43.4282V153.134H46.2664V150.499H63.085V152.585H70.2532V150.018H81.4017V161.167H78.8351V175.363H77.8131V188.766H77.8212V198.096H75.7057V221.16H78.4326V229.461H81.32V235.356ZM67.3095 158.562L66.9361 158.183H63.085V160.927H57.5138V164.878H54.4655V167.842H52.4682V173.111H49.3147V179.148H46.2664V188.038H43.4282V196.71H41.3258V226.854H44.2889V223.78H49.7551V221.256H52.4881V218.621H55.3262V212.584H58.5849V206.657H60.8974V200.84H64.0509V192.059H67.3095V174.935H69.7272V163.081H67.3095V158.562ZM14.5486 269.67H39.461C32.9351 261.173 22.7498 247.48 20.6664 225.487C18.9091 206.936 19.0224 192.436 25.6788 176.123C27.503 171.652 29.318 167.559 30.9062 163.977C33.9543 157.103 36.167 152.113 36.0063 149.953H4.29032C7.29224 152.445 11.3389 157.872 11.3389 167.116C11.3389 174.913 9.02086 188.234 6.91156 200.356C5.89496 206.198 4.92685 211.761 4.29014 216.293C2.33236 230.227 4.36814 253.696 14.5486 269.67ZM85.5889 234.843H102.349V220.05C103.688 221.219 106.83 224.514 108.677 228.344C110.985 233.133 113.038 235.356 118.681 235.356C124.325 235.356 128.258 229.883 128.258 223.983V150.018H109.874V216.373C109.019 217.998 105.769 220.272 102.349 216.373V150.018H85.5889V234.843ZM188.228 262.045H163.827V220.004C163.636 220.329 163.43 220.681 163.21 221.056L163.207 221.061C159.39 227.578 151.516 241.019 145.046 241.019C136.355 241.019 134.011 230.848 134.011 224.471V163.744C134.206 159.746 135.874 151.926 140.554 150.687C146.211 149.19 148.45 150.559 149.93 151.598C150.975 152.332 153.631 156.251 156.524 160.518L156.524 160.519L156.524 160.519L156.525 160.52C159.094 164.309 161.849 168.374 163.827 170.727V149.953H188.228C188.228 149.953 180.947 156.947 180.178 200.284C179.41 243.621 188.228 262.045 188.228 262.045ZM163.827 175.717C163.353 174.181 161.922 173.064 160.23 173.064C158.151 173.064 156.465 174.75 156.465 176.829V213.057C156.465 215.136 158.151 216.822 160.23 216.822C161.922 216.822 163.353 215.705 163.827 214.168V175.717Z"
        fill={color}
      />
    </SVG>
  );
}

export default SecondaryLogo;