import { paperContainer } from "../paper/paperVariables.js";
import { rockContainer } from "../rock/rockVariables.js";

const scissorsIcon = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="scissors-path" fill-rule="evenodd" clip-rule="evenodd" d="M1.39442 2.15101C1.33573 1.86984 1.51806 1.59334 1.80122 1.5349C2.08473 1.47714 2.36284 1.65767 2.4217 1.93901L3.63166 7.72078C3.67084 7.90771 3.85491 8.02806 4.04351 7.98898C4.09349 7.97878 4.13807 7.95785 4.17673 7.92984C4.28975 7.88453 4.37631 7.78251 4.39285 7.65386L5.14899 1.72649C5.16658 1.5885 5.2371 1.46556 5.34786 1.38031C5.45879 1.29506 5.59619 1.25753 5.73516 1.27534C5.87413 1.29281 5.99794 1.36301 6.0838 1.47299C6.16965 1.5828 6.20727 1.7194 6.18968 1.85739L5.44242 7.71594C5.42518 7.85081 5.48944 7.97635 5.59637 8.04673C5.66184 8.12749 5.75884 8.17781 5.8642 8.17781C6.05628 8.17781 6.21249 8.0227 6.21249 7.83197V7.39966C6.21249 7.06593 6.48607 6.79444 6.822 6.79444C7.1581 6.79444 7.43151 7.06593 7.43151 7.39966V8.52365C7.43151 8.71438 7.58789 8.86949 7.7798 8.86949C7.97188 8.86949 8.12809 8.71438 8.12809 8.52365V7.89335C8.18573 7.86793 8.33323 7.83197 8.42048 7.83197C8.66898 7.83197 8.88684 8.03394 8.88684 8.26427C8.88684 9.87001 8.75466 12.68 8.40028 13.3837C7.88132 14.4145 7.30072 15.2677 5.44329 15.2677C3.74155 15.2677 2.26636 14.4629 1.28958 13.0014C0.665795 12.0682 0.38246 10.1505 1.35837 9.2698C1.45746 9.1804 1.66086 9.05884 1.69551 9.03826L1.9381 10.7019C1.96335 10.8742 2.11224 10.9983 2.28238 10.9983C2.29893 10.9983 2.31582 10.9971 2.33271 10.9949C2.52305 10.9674 2.65505 10.792 2.62754 10.603L1.39807 2.17176L1.39442 2.15101ZM8.40916 7.14011C8.34298 7.14011 8.22561 7.15325 8.08716 7.18836C7.98442 6.57155 7.4376 6.10259 6.79831 6.10259C6.64054 6.10259 6.48555 6.13423 6.33944 6.18905L6.88069 1.94437C6.92178 1.62309 6.83419 1.30509 6.63427 1.04916C6.43453 0.793068 6.14632 0.629831 5.82275 0.589195C5.49902 0.54804 5.17894 0.635192 4.92103 0.833704C4.6633 1.03204 4.49873 1.3184 4.45781 1.63969L3.93241 5.7583L3.10365 1.79825C2.96677 1.14375 2.31895 0.721653 1.65964 0.857741C1.00416 0.992965 0.580289 1.62966 0.710202 2.28053L1.58232 8.26202C1.29446 8.41989 0.957313 8.65783 0.939202 8.6708C-0.0943491 9.40917 -0.423657 11.676 0.717864 13.3834C1.82787 15.0445 3.5075 15.9592 5.4473 15.9592C7.69656 15.9592 8.44834 14.8396 9.02563 13.6928C9.57837 12.5952 9.58464 8.44047 9.58464 8.26427C9.58464 7.65507 9.04636 7.14028 8.40916 7.14011Z" fill="#FFF"/>
</svg>
`;

const iconsWrapper = document.createElement('div');
iconsWrapper.classList.add('icons-wrapper');

const scissorsContainer = document.createElement('div');
scissorsContainer.innerHTML = scissorsIcon;
scissorsContainer.classList.add('icons');

const scissorsScreenContainer = document.createElement('div');

const scissorsCircle = document.createElement('div');
const titleScissors = document.createElement('h2');
titleScissors.textContent = 'Scissors';
const scissors = document.createElement('img');

iconsWrapper.append(scissorsContainer, rockContainer, paperContainer);

export {
  scissorsContainer,
  scissorsScreenContainer,
  scissorsCircle,
  titleScissors,
  scissors,
  iconsWrapper,
  scissorsIcon,
};