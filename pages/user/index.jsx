import UserLayout from '../../src/components/layout/UserLayout';
import Topics from '../../src/components/private/topic/Topics';

export default function Home() {
  return (
    <UserLayout>
      <div className="page-container-scroll">
        <div className="page-container">
          <div className="center-container">
            <Topics />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
