import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

export function useWeaponTransfers() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const { data: transfers, error } = await supabase
                    .from('weapon_transfers')
                    .select('*')
                    .order('year', { ascending: false });

                if (error) throw error;
                setData(transfers);
            } catch (err) {
                console.error('Error fetching transfers:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { data, loading, error };
}
