import { render, fireEvent, screen } from '@testing-library/jest-dom';
import CommitsPage from '../components/CommitsPage';
import { Commit } from '../types/Commit';

const mockData: { hits: Commit[] } = {
    hits: [
        {
            id: '1',
            sha: 'abc123',
            message: 'Initial commit',
            authorName: 'John Doe',
            authorEmail: 'john.doe@example.com',
        },
        // Add more mock commits as needed
    ],
};

const mockProps = {
    data: mockData,
    isLoading: false,
    isError: false,
    currentPage: 1,
    isOpen: false,
    selectedCommit: null,
    animationClass: 'opacity-100',
    handleCardClick: jest.fn(),
    handleClose: jest.fn(),
    handleNext: jest.fn(),
    handlePrevious: jest.fn(),
};

describe('CommitsPage', () => {
    it('renders commits correctly', () => {
        render(<CommitsPage {...mockProps} />);
        expect(screen.getByText('GitHub Commits - Page 1')).toBeInTheDocument();
        expect(screen.getByText('Initial commit')).toBeInTheDocument();
    });

    it('triggers handleCardClick when a commit card is clicked', () => {
        render(<CommitsPage {...mockProps} />);
        fireEvent.click(screen.getByText('Initial commit'));
        expect(mockProps.handleCardClick).toHaveBeenCalled();
    });

    it('shows next and previous buttons', () => {
        render(<CommitsPage {...mockProps} />);
        expect(screen.getByText('Next')).toBeInTheDocument();
        expect(screen.getByText('Previous')).toBeInTheDocument();
    });
});
