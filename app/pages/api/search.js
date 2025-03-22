import tutorials from '../../data/tutorials.json';

export default function handler(req, res) {
  // Ensure the query is passed in the request
  const { query } = req.query;

  // Log the query to ensure it's being received
  console.log('Search query:', query);

  if (!query) {
    // Return an error if no query is passed
    return res.status(400).json({ error: "Search query is missing" });
  }

  // Filter tutorials based on the query, handling case-insensitivity
  const searchResults = tutorials.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(query.toLowerCase())
  );

  // Return the results, or an empty array if no results
  if (searchResults.length === 0) {
    return res.status(200).json({ message: "No tutorials found", results: [] });
  }

  // Return the filtered tutorials
  return res.status(200).json(searchResults);
}
