
const formatVolumeIconPath = require('../assets/scripts/main');

test('tests volume level > 66', () => {
    expect(formatVolumeIconPath(67)).toContain('3');
    expect(formatVolumeIconPath(100)).toContain('3');
});

test('tests volume level 33 < volume <= 66', () => {
    expect(formatVolumeIconPath(34)).toContain("2");
    expect(formatVolumeIconPath(66)).toContain("2");
});

test('tests volume level 0 < volume <= 33', () => {
    expect(formatVolumeIconPath(1)).toContain("1");
    expect(formatVolumeIconPath(33)).toContain("1");
});

test('tests volume level 0', () => {
    expect(formatVolumeIconPath(0)).toContain("0");
});