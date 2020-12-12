import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop
            <main className={styles.Content}>
                {props.children}
            </main>
        </div>
    </Aux>
);

export default layout;