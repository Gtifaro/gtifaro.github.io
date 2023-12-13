import Image from 'next/image';

import GithubSVG from '../public/GithubSVG.svg'

export default function Github() {
  return (
    <div>
      <Image
        src={GithubSVG}
        alt="Github"
        width={30}
        height={30}
      />
    </div>
  );
}
