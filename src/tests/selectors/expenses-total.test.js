import  selectExpensesTotal  from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'


test('should return 0 if no expenses', () => {
    const noExpenses = [];
    const result = selectExpensesTotal(noExpenses);
    expect(result).toBe(0);
});

test('should return correcttly a single expese', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('should return correcttly a multiple expese', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
}); 