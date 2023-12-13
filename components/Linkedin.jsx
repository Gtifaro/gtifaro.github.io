import Image from 'next/image';

import LinkedinSVG from '../public/LinkedinSVG.svg'

export default function Linkedin() {
  return (
    <div>
      <Image
        src={LinkedinSVG}
        alt="Linkedin"
        width={30}
        height={30}
      />
    </div>
  );
}
