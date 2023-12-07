import PropTypes from 'prop-types';
import ThreadComponent from './ThreadComponent';
import EmptyMessage from '../EmptyMessage';
import LoadingMessage from '../LoadingMessage';

function ThreadListComponent({ threads, loading }) {
  if (loading) {
    return (
      <LoadingMessage />
    );
  }

  if (threads.length === 0) {
    return (
      <EmptyMessage />
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 lg:px-60">
      {
        threads.map((thread) => (
          <ThreadComponent data={thread} key={thread.id} />
        ))
      }
    </div>
  );
}

ThreadListComponent.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ThreadListComponent;
