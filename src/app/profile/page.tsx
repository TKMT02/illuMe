
import Hobby from '@/components/hobby';
import PostList from '@/components/postList';
import styles from '@/styles/profile.module.scss';
export default function Profile() {

    return (
        <>
            <div className={styles.profileWrap}>
                <Hobby />
                <PostList />
            </div>
        </>
    )
}

