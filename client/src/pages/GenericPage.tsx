import Menubar from "../components/Menubar";

interface GenericPageProps {
	selected?: string;
	displayName?: string;
  children?: React.ReactNode;
}

const GenericPage = (props: GenericPageProps) => {

  return (
    <div className='generic-page-body'>
      <Menubar selected={props.selected} displayName={props.displayName}/>
			{props.children}
    </div>
  );
};

export default GenericPage;