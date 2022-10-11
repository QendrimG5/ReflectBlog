using System.Linq.Expressions;
using System.Linq;
using System;

namespace Blog.Helpers
{
    public static class SearchHelper
    {
        public static IQueryable<T> WhereIf<T>(this IQueryable<T> query, bool condition, Expression<Func<T, bool>> predicate)
        {
            return condition
                ? query.Where(predicate)
                : query;
        }
    }
}
