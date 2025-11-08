
export class TestDataGenerator {
    static uniqueEmail(): string {
        const timestamp = Date.now(); 
        return `test-${timestamp}@test.com`;
    }
}