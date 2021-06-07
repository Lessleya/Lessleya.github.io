from words  import prefix, suffix
import pytest


def test_suffix():
    """Verify that the suffix function works correctly."""
    assert suffix("", "") == ""
    assert suffix("", "correct") == ""
    assert suffix("clear", "") == ""
    assert suffix("angelic", "awesome") == ""
    assert suffix("found", "profound") == "found"
    assert suffix("ditch", "itch") == "itch"
    assert suffix("happy", "funny") == "y"
    assert suffix("tired", "fatigued") == "ed"
    assert suffix("swimming", "FLYING") == "ing"


# Call the main function that is part of pytest so that
# the test functions in this file will start executing.
pytest.main(["-v", "--tb=line", "-rN", "words.py"])
