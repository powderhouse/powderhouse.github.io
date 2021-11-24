// global.js

import styled from 'styled-components';
import { css } from 'styled-components';

const baseGrid = css`
  	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 24px;
`

const colors = css`
	--off-black:rgb(42, 46, 47); /* #2A2E2F */
	--off-white:rgb(245, 243, 239); /* #F5F3EF */
	--purple:rgb(178, 131, 200); /* #B283C8 */
	--yellow:rgb(255, 200, 93); /* #FFC85D */
	--green:rgb(50, 131, 90); /* #32835A */
	--blue:rgb(128, 210, 236); /* #80D2EC */
	--red:rgb(226, 87, 87); /* #E25757 */
`

export { 
	baseGrid 
};