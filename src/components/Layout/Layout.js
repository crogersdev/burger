import Aux from '../../hoc/Aux'

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop
            <main>
                {props.children}
            </main>
        </div>
    </Aux>
);

export default layout;