import { Link } from '@redwoodjs/router'
import './MenuItem.scss'
function MenuItem({ title, to }) {
  console.log(to);
  return (
    <div className='menu-item'>
      <Link
        to={to}>{title}
      </Link>
    </div>
   );
}

export default MenuItem;
