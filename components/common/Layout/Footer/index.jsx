import Socials from "./Socials";
import styles from "./Footer.module.css";
import { primaryColor } from "../../../../data/index";
import styled from "styled-components";
export default () => {
  return (
    <Container className={styles.container}>
      <Socials />
    </Container>
  );
};

const Container = styled.div`
  background-image: ${({ color = primaryColor }) => `url(
          "data:image/svg+xml,%3Csvg width='937' height='433' viewBox='0 0 937 433' fill='#fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M931.121 433H-225C-225 433 -150.358 205.344 -37.2172 165.061C-20.9083 159.133 -3.87823 157.532 12.8975 160.352C40.1875 164.957 64.8717 183.952 82.4059 212.087C119.491 271.59 233.064 401.25 460.302 253.083C460.302 253.083 541.649 145.129 672.298 272.703C680.392 278.044 688.698 282.801 697.178 286.953C737.262 307.06 817.443 335.073 874.446 275.97C953.317 194.188 931.121 433 931.121 433Z' fill='url(%23paint0_linear)' fill-opacity='0.72'/%3E%3Cpath d='M1141.6 433H-225C-225 433 -136.77 168.787 -3.03073 122.035C16.2473 115.154 36.3778 113.297 56.2075 116.569C88.4658 121.914 117.644 143.959 138.37 176.612C182.207 245.671 316.456 396.151 585.064 224.191C585.064 224.191 681.22 98.9011 835.654 246.961C845.222 253.161 855.039 258.682 865.064 263.5C912.446 286.836 1007.22 319.348 1074.6 250.753C1167.83 155.838 1141.6 433 1141.6 433Z' fill=${color} fill-opacity='0.21'/%3E%3Cpath d='M931.68 433H0C0 433 60.1513 280.953 151.328 254.048C164.471 250.089 178.195 249.02 191.714 250.903C213.706 253.979 233.598 266.665 247.728 285.456C277.614 325.197 369.139 411.795 552.263 312.836C552.263 312.836 617.817 240.736 723.103 325.94C729.626 329.508 736.319 332.685 743.153 335.458C775.456 348.886 840.071 367.596 886.007 328.122C949.567 273.501 931.68 433 931.68 433Z' fill='url(%23paint1_linear)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='354.5' y1='159' x2='354.5' y2='433' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color=%23${primaryColor}/%3E%3Cstop offset='1' stop-color=${color} stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='467' y1='250' x2='467' y2='433' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color=${color}/%3E%3Cstop offset='1' stop-color=${color} stop-opacity='0'/%3E%3C/linearGradient%3E%3CclipPath id='clip0'%3E%3Crect width='937' height='433' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
        ) center/cover no-repeat`};
`;
