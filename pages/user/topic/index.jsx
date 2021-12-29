import UserLayout from '../../../src/components/layout/PublicLayout';
import Topics from '../../../src/components/private/topic/Topics';

export default function Topic() {
  return (
    <UserLayout>
      <h2 className="page-title">Topics</h2>
      <Topics />
    </UserLayout>
  );
}
