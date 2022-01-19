import UserLayout from '../../src/components/layout/UserLayout';
import Topics from '../../src/components/private/topic/Topics';

export default function Home() {
  return (
    <UserLayout>
      <div className="center-container">
        <Topics />
      </div>
    </UserLayout>
  );
}
