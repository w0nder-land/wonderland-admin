import { SIDEBAR } from 'constants/sidebar';

import ListItem from '../ListItem';

const List = () => {
  return (
    <>
      {SIDEBAR.map((sidebarItem) => (
        <ListItem sidebar={sidebarItem} key={sidebarItem.id} />
      ))}
    </>
  );
};

export default List;
